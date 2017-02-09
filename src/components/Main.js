require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


// 图片数据
var imageDatas=[{
	"fileName":"../images/1.jpg",
	"title":"乱写的",
	"desc":"什么乱七八糟的哦"
},
{
	"fileName":"../images/1.jpg",
	"title":"乱写的",
	"desc":"什么乱七八糟的哦"
},
{
	"fileName":"../images/1.jpg",
	"title":"乱写的",
	"desc":"什么乱七八糟的哦"
},
{
	"fileName":"../images/1.jpg",
	"title":"乱写的",
	"desc":"什么乱七八糟的哦"
},
{
	"fileName":"../images/1.jpg",
	"title":"乱写的",
	"desc":"什么乱七八糟的哦"
},
{
	"fileName":"../images/1.jpg",
	"title":"乱写的",
	"desc":"什么乱七八糟的哦"
},
{
	"fileName":"../images/1.jpg",
	"title":"乱写的",
	"desc":"什么乱七八糟的哦"
},
{
	"fileName":"../images/1.jpg",
	"title":"乱写的",
	"desc":"什么乱七八糟的哦"
},
{
	"fileName":"../images/1.jpg",
	"title":"乱写的",
	"desc":"什么乱七八糟的哦"
},
];
class AppComponent extends React.Component {
  render() {
    return (
			<section className="stage">
				<section className="img-sec">
				</section>
				<nav className="controller-nav">
				</nav>
			</section>
			);
  };
};

AppComponent.defaultProps = {
};

export default AppComponent;
