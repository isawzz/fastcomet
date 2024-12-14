<?php
$allSyms = file_get_contents('../assets/allSyms.yaml');
$symGSG = file_get_contents('../assets/symGSG.yaml');
$DB = file_get_contents('./DB.yaml');
$c52 = file_get_contents('../assets/c52.yaml');
$allWP = file_get_contents('../assets/allWP.yaml');
$fens = file_get_contents('../assets/fens.csv');
?>
<script type="text/javascript">
let x = <?=json_encode($allSyms); ?>;
Syms = symbolDict = jsyaml.load(x);
SymKeys = Object.keys(Syms);
x = <?=json_encode($symGSG); ?>;
ByGroupSubgroup = jsyaml.load(x);
//console.log('ByGroup', ByGroupSubgroup);
x = <?=json_encode($DB); ?>;
DB = jsyaml.load(x);
x = <?=json_encode($c52); ?>;
C52 = jsyaml.load(x);
x = <?=json_encode($allWP); ?>;
WordP = jsyaml.load(x);
x = <?=json_encode($fens); ?>;
FenPositionList = csv2list(x);
//console.log('Fens', FenPositionList);
</script>
