
function cryBoard(dParent, cols, rows, sz) {
	dParent = toElem(dParent);
	let [w, h] = [sz * cols + sz + 20, (sz * .75) * cols + 40];
	//let [cols, rows, sz] = [9, 10, 80];
	// let w=sz*cols+sz+20;
	// let h=(sz*.75)*cols+40;
	let dBoard = mDom(dParent, { w,h});//(sz/.7)*rows+sz+20});//,acontent:'center',jcontent:'center' });

	let d = mDom(dBoard, { gap: 10, margin: 10, position: 'relative' });
	
	let clip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

	let dihab={mountain:'gray', desert:'yellow', forest:'green', water:'blue', swamp:'brown'};
	let diterr={all:null,bear:'black',puma:'red'};

	let items=[];
	for (let r = 0; r < rows; r++) {
		let x = r % 2;
		let thiscols = x>0?cols:cols+1;
		for (let c = 0; c < cols; c++) {
			//let db=mDom(d,{bg:'white',clip,w:sz-1, h:sz-1, position:'absolute', left:x*sz*.5, top:r*sz*.75}); //, bg:rChoose(Object.keys(dihab))})
			//let db=mDom(d,{className:'hex1',clip,w:sz-1, h:sz-1, position:'absolute', left:x*sz*.5, top:r*sz*.75}); //, bg:rChoose(Object.keys(dihab))})
			let gap=1;
			let db=mDom(d,{clip,w:sz-gap, h:sz-gap, position:'absolute', left:x*sz*.5, top:r*sz*.75}); //, bg:rChoose(Object.keys(dihab))})
			
			let shrink=0;
			let habitat=rChoose(Object.keys(dihab));
			let territory = rChoose(Object.keys(diterr));

			if (territory=='puma') {shrink=4;mStyle(db,getDashedHexBorder('red')); }
			else if (territory=='bear') {shrink=4;mStyle(db,getDashedHexBorder('silver')); }
			let d1 = mDom(db, { left:2, top: 2, clip, position: 'absolute', w: sz-(gap+shrink), h: sz-(gap+shrink), bg: dihab[habitat] });
			//return;
			//let d1 = mDom(d, { left: x * sz *.5, top: r * sz*.75, clip, position: 'absolute', w: sz-4, h: sz-4, bg: rChoose(Object.values(dihab)) });
			//mStyle(d1,{className:'hex'})
			x+=2;
			mCenterCenterFlex(d1);
			items.push({r,c,div:d1,habitat,territory})
		}
	}
	return items;	
}
