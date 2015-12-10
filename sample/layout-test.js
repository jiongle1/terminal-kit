#!/usr/bin/env node
/*
	The Cedric's Swiss Knife (CSK) - CSK terminal toolbox test suite
	
	Copyright (c) 2009 - 2014 Cédric Ronvel 
	
	The MIT License (MIT)
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

/* jshint unused:false */



console.error( "\n\n\n\n\n\n\n\n" ) ;
term = require( '../lib/termkit.js' ).terminal ;

/*
var def = {
	widthPercent: 60 ,
	heightPercent: 60 ,
	rows: [
		{
			heightPercent: 75 ,
			columns: [
				{ widthPercent: 100/3 } ,
				{ width: 30 } ,
				{} ,
			]
		} ,
		{}
	]
} ;
//*/

//*
var def = {
	id: 'main' ,
	widthPercent: 60 ,
	heightPercent: 60 ,
	rows: [
		{
			id: '1st row' ,
			heightPercent: 75 ,
			columns: [
				{ id: 'percent' , widthPercent: 100/3 } ,
				{ id: 'auto' } ,
				{ id: 'fixed' , width: 30 } ,
			]
		} ,
		{
			id: '2nd row' ,
			columns: [
				{ id: 'fixed2' , width: 20 } ,
				{ id: 'auto2' } ,
			]
		}
	]
} ;
//*/

var options = {
	boxChars: 'double'
} ;

//var layout = term.Layout.create( def , options ) ;
var layout = term.createLayout( def , options ) ;

term.grabInput() ;
term.hideCursor() ;
layout.draw() ;
layout.setAutoResize() ;

layout.boxes.percent.put( { x: 0 , y: 0 , attr: { color: 'red' } } , 'Percent sized box' ) ;
layout.boxes.percent.draw() ;

layout.boxes.auto.put( { x: 0 , y: 0 , attr: { color: 'green' } } , 'Auto sized box' ) ;
layout.boxes.auto.draw() ;

layout.boxes.fixed.put( { x: 0 , y: 0 , attr: { color: 'cyan' } } , 'Fixed sized box' ) ;
layout.boxes.fixed.draw() ;

term.on( 'key' , function( key ) {
	if ( key === 'CTRL_C' ) {
		term.grabInput( false ) ;
		term.hideCursor( false ) ;
		term.clear() ;
		process.exit() ;
	}
} ) ;


//term.moveTo( 1 , term.height ) ;






