1-20
3, 5
(1) 把3的倍數列出來
3 6 9 12 15 18
用LOOP數到20
1, 2, 3... 20
if => 是倍數，就列出來
	3, 6, 9, 12, [15], 18
else => 不是，就跳過
	1, 2, 4, 5, 7, 8, .. 20
(2)
用LOOP數到20
if => 是倍數，就列出來
	5, 10, [15], 20
else => 不是，就跳過

(3)
不要算重複數字
a. 全部算好了再減
if => 3 跟 5的倍數 
	[15]
else => 跳過
b. 都抓出來再加
if => 3 跟 5的倍數 
	[15]
else => 跳過

(4)
加起來

answer => 9


if (condition) {
	variable + 1
} else {
	variable - 1
}

for (Variable; condition; change) {
	anotherVariable + 1;
}

var answer = 0;

for (var i = 0; i < 20; i++) {
	if ( i % 5 == 0 && i % 3 == 0) {
		answer ++;
	} else if (i % 5 == 0) {
		answer ++;
	} else if (i % 3 == 0) {
		answer ++;
	}
}

console.log(answer);

for (var i = 1; i < projects.length; i++) {
	// display project with id of i
	// 把這個案件顯示出來 (i = 1 就顯示project id 1)
}

for (var i = 1; i < projects.length; i++) {
	if (category == 'freebird') {
		// 把FREEBIRD的案件顯示出來
	}
}

for (var i = 1; i < projects.length; i++) {
	if (category == 'technology') {
		// 把科技的案件顯示出來
	}
}

[
	{
		'name': 'projectname',
		'id': 1,
		'owner': 'me',
		'projectpicture': 'picture.jpg',
		'category': 'freebird'
	},
	{
		'name': 'projectname',
		'id': 2,
		'owner': 'me',
		'projectpicture': 'picture.jpg',
		'category': 'freebird'
	},
	{
		'name': 'projectname',
		'id': 3,
		'owner': 'me',
		'projectpicture': 'picture.jpg',
		'category': 'technology'
	},
	{
		'name': 'projectname',
		'id': 4,
		'owner': 'me',
		'projectpicture': 'picture.jpg',
		'category': 'technology'
	}
]


