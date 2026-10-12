function md5(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];
  // pre-processing
  const origLen = bytes.length;
  const bitLen = origLen * 8;
  const withOne = origLen + 1;
  const padLen = ((56 - withOne % 64) + 64) % 64;
  const totalLen = withOne + padLen + 8;
  const msg = new Uint8Array(totalLen);
  msg.set(bytes);
  msg[origLen] = 0x80;
  // length little-endian 64-bit
  const view = new DataView(msg.buffer);
  view.setUint32(totalLen - 8, bitLen >>> 0, true);
  view.setUint32(totalLen - 4, Math.floor(bitLen / 4294967296), true);

  const K = new Uint32Array(64);
  for (let i = 0; i < 64; i++) K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);
  const S = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,
             5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,
             4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,
             6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  for (let off = 0; off < totalLen; off += 64) {
    const M = new Uint32Array(16);
    for (let i = 0; i < 16; i++) M[i] = view.getUint32(off + i*4, true);
    let [a,b,c,d] = h;
    for (let i = 0; i < 64; i++) {
      let f, g;
      if (i < 16) { f = (b & c) | (~b & d); g = i; }
      else if (i < 32) { f = (d & b) | (~d & c); g = (5*i + 1) % 16; }
      else if (i < 48) { f = b ^ c ^ d; g = (3*i + 5) % 16; }
      else { f = c ^ (b | ~d); g = (7*i) % 16; }
      f = (f + a + K[i] + M[g]) >>> 0;
      a = d; d = c; c = b;
      b = (b + ((f << S[i]) | (f >>> (32 - S[i])))) >>> 0;
    }
    h[0] = (h[0] + a) >>> 0;
    h[1] = (h[1] + b) >>> 0;
    h[2] = (h[2] + c) >>> 0;
    h[3] = (h[3] + d) >>> 0;
  }
  return h.map(x => x.toString(16).padStart(8,'0').match(/../g).reverse().join('')).join('');
}