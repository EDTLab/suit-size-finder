var vals = {
  chest: 0,
  waist: 0,
  back: 0,
  hip: 0,
  leg: 0,
  get u1() {
    var x = parseFloat(this.chest);
    if (x < 78)    return 'too small';
    if (x > 125.6) return 'too big';
    return Math.floor((x + 2) / 4) * 4;
  },
  get u2() {
    var x = parseFloat(this.waist);
    if (x < 67.5)   return 'too small';
    if (x >= 122.5) return 'too big';
    return Math.floor((x + 2.5) / 5) * 5;
  },
  get u3() {
    var x = parseFloat(this.back);
    if (x < 34.5) return 'too small';
    if (x < 44.6) return 43;
    if (x < 48)   return 46;
    if (x < 58)   return 50;
    return 'too big';
  },
  get u4() {
    var x = parseFloat(this.chest) - parseFloat(this.waist);
    if (x < -8.2) return 'too small';
    if (x < 7)    return 'BB';
    if (x < 13)   return 'B';
    if (x < 18.4) return 'A';
    if (x < 32.3) return 'Y';
    return 'too big';
  },
  get l1() {
    var x = parseFloat(this.waist);
    if (x < 70.5)   return 68;
    if (x >= 120.5) return 'too big';
    return Math.floor((x + 2.5) / 5) * 5;
  },
  get l2() {
    var x = parseFloat(this.hip);
    if (x < 72)   return 'too small';
    if (x >= 128) return 'too big';
    return Math.floor((x + 2) / 4) * 4;
  },
  get l3() {
    var x = parseFloat(this.leg);
    if (x < 78)   return 'too small';
    if (x <= 99)  return 'S';
    if (x <= 105) return 'M';
    if (x <= 115) return 'L';
    return 'too big';
  },
  get l4() {
    var x = parseFloat(this.hip) - parseFloat(this.waist);
    if (x < -12)  return 'too small';
    if (x < 11.7) return 'B';
    if (x <= 30)  return 'A';
    return 'too big';
  }
};

$('input').keyup(function () { $('input').change(); });
$('input').change(function () {
  var i, tmp;

  vals.chest = $('input[name="chest"]').val();
  vals.waist = $('input[name="waist"]').val();
  vals.back = $('input[name="back"]').val();
  vals.hip = $('input[name="hip"]').val();
  vals.leg = $('input[name="leg"]').val();

  for (i = 1; i <= 4; i++) {
    tmp = vals['u' + i];
    if (!tmp || tmp.match && tmp.match(/too /))
      $('#upper' + i).text('??');
    else $('#upper' + i).text(tmp);

    tmp = vals['l' + i];
    if (!tmp || tmp.match && tmp.match(/too /))
      $('#lower' + i).text('??');
    else $('#lower' + i).text(tmp);
  }

  console.log(vals.u1);
});
