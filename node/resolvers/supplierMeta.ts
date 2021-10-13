import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET ?? 'b2b-s3cr3t'

const supplierMeta = (_: unknown, __: unknown, ctx: Context) => {
  const {
    vtex: { account },
    header: { referer },
  } = ctx

  return jwt.sign({ returnUrl: referer, account }, SECRET)
}

export default supplierMeta
