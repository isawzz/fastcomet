
function getDashedHexBorder(color) {
  //return {border:'20 solid white'}
  return {
    background: `repeating-linear-gradient(-60deg, ${color}, ${color} 4px, transparent 4px, transparent 10px),
    repeating-linear-gradient(60deg, ${color}, ${color} 4px, transparent 4px, transparent 10px),
    repeating-linear-gradient(0deg, ${color}, ${color} 4px, transparent 4px, transparent 10px)`,
    bgSize: '100% 100%'

  }
  return {
    background: `repeating-linear-gradient(-60deg, ${color}, ${color} 4px, transparent 4px, transparent 10px)`,
    // repeating - linear - gradient(
    //   60deg, red, red 4px, transparent 4px, transparent 10px
    // ),
    // repeating - linear - gradient(
    //   0deg, red, red 4px, transparent 4px, transparent 10px
    // );
    bgSize: '100% 100%'
  };
}

