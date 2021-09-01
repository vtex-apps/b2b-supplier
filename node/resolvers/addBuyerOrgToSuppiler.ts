import type { MutationAddBuyerOrgToSupplierArgs } from 'vtex.b2b-supplier'
import jwt from 'jsonwebtoken'

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? 'KEY_TEST'

type BuyerOrg = {
  approved: boolean
  email: string
  isCorporate: boolean
  corporateDocument: string
  companyName: string
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
      firstName: (payload as BuyerOrg).companyName,
      approved: false,
      isCorporate: true,
    }

    console.log({ profile })

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
