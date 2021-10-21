import jwt from 'jsonwebtoken'
import type { QuerySupplierMetaArgs } from 'vtex.b2b-supplier'

const SECRET = process.env.SECRET ?? 'b2b-s3cr3t'

const supplierMeta = (
  _: unknown,
  args: QuerySupplierMetaArgs,
  ctx: Context
) => {
  const { countries } = args

  const {
    vtex: { account, locale },
    header: { referer },
  } = ctx

  return jwt.sign({ returnUrl: referer, account, locale, countries }, SECRET)
}

export default supplierMeta
