import type { MutationAddBuyerOrgToSupplierArgs } from 'vtex.b2b-supplier'
import jwt from 'jsonwebtoken'

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? ''

type BuyerOrg = {
  approved: boolean
  email: string
  isCorporate: boolean
  corporateDocument: string
  firstName: string
}

const addBuyerOrgToSupplier = async (
  _: unknown,
  { input }: MutationAddBuyerOrgToSupplierArgs,
  ctx: Context
) => {
  const { profileSystem } = ctx.clients
  const { token } = input

  try {
    const payload = await jwt.verify(token, PRIVATE_KEY)

    const profile = {
      ...(payload as BuyerOrg),
      approved: false,
      isCorporate: true,
    }

    await profileSystem.createProfile(profile)

    return {
      error: null,
    }
  } catch (error) {
    return {
      error,
    }
  }
}

export default addBuyerOrgToSupplier
