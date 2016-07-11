function robot(skinScan) {
	skinScan.forEach(function(item) {
		item.forEach(function (skin, i) {
			if (skin === 'X') item[i] = '*'
		})
	})
	return skinScan
}