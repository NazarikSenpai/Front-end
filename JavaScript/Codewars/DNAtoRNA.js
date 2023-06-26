function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  if (!dna.includes('T')) {
    return dna;
  }

  let lastPosition = dna.indexOf('T');
  let length = dna.length;

  while (dna.includes('T', lastPosition)) {
    for (let i = 0; i < length; i++) {
      if (i == lastPosition) {
        dna += 'U';
      } else {
        dna += dna.at(i);
      }
    }

    dna = dna.slice(length);
    lastPosition = dna.indexOf('T');
  }

  return dna;
}

console.log(DNAtoRNA('234T234'));
