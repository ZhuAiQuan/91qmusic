export default function () {
  return async (ctx, next) => {
    // console.log(ctx)
    await next()
  }
}