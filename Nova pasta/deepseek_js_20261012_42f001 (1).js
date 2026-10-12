function md5(buffer){
  const bytes = new Uint8Array(buffer);
  const origLen = bytes.length;
  const bitLenLo = (origLen * 8) >>> 0;
  const bitLenHi = Math.floor(origLen * 8 / 4294967296);

  const withOne = origLen + 1;
  const padLen = ((56 - (withOne % 64)) + 64) % 64;
  const total = withOne + padLen + 8;
  const msg = new Uint8Array(total);
  msg.set(bytes);
  msg[origLen] = 0x80;
  const dv = new DataView(msg.buffer);
  dv.setUint32(total - 8, bitLenLo, true);
  dv.setUint32(total - 4, bitLenHi, true);

  const K = new Uint32Array(64);
  for (let i=0;i<64;i++) K[i] = Math.floor(Math.abs(Math.sin(i+1)) * 4294967296) >>> 0;
  const S = [...];

  let a0=0x67452301,b0=0xefcdab89,c0=0x98badcfe,d0=0x10325476;

  for (let off=0; off<total; off+=64){
    const M = new Uint32Array(16);
    for (let i=0;i<16;i++) M[i] = dv.getUint32(off+i*4, true);
    let A=a0,B=b0,C=c0,D=d0;
    for (let i=0;i<64;i++){
      let F,G;
      if (i<16){ F=(B&C)|(~B&D); G=i; }
      else if (i<32){ F=(D&B)|(~D&C); G=(5*i+1)%16; }
      else if (i<48){ F=B^C^D; G=(3*i+5)%16; }
      else { F=C^(B|~D); G=(7*i)%16; }
      F = (F + A + K[i] + M[G]) >>> 0;
      A = D; D = C; C = B;
      const rot = (F << S[i]) | (F >>> (32 - S[i]));
      B = (B + rot) >>> 0;
    }
    a0=(a0+A)>>>0; b0=(b0+B)>>>0; c0=(c0+C)>>>0; d0=(d0+D)>>>0;
  }
  return [a0,b0,c0,d0].map(wordToHexLE).join('');
}
function wordToHexLE(w){
  let s = (w>>>0).toString(16).padStart(8,'0');
  return s.slice(6,8)+s.slice(4,6)+s.slice(2,4)+s.slice(0,2);
}