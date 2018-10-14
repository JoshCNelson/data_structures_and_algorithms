function difference(s, t) {
  for (let i = 0; i < s.length; i++) {
    let current_char = s[i];
    t = t.replace(current_char, '');
  }

  return t;
}