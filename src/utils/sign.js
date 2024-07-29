import md5 from "md5";

export function createSign(e = {}) {
  if ("[object Object]" !== Object.prototype.toString.call(e))
    throw new Error("The parameter of query must be a Object.");
  Object.assign(e, { appid: +process.env.APPID });
  var t = Math.floor(Date.now() / 1e3);
  Object.assign(e, {
    timestamp: t,
  });
  var n = Object.keys(e);
  n.sort();
  for (var r = "", i = 0; i < n.length; i++) {
    var o = n[i];
    r += (0 == i ? "" : "&") + o + "=" + e[o];
  }
  return {
    ...e,
    sign: md5((r += process.env.SECRET)),
    timestamp: t,
  };
}
