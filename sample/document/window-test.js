#!/usr/bin/env node
/*
	Terminal Kit

	Copyright (c) 2009 - 2020 Cédric Ronvel

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

"use strict" ;



const termkit = require( '../..' ) ;
const term = termkit.terminal ;



term.clear() ;
//term.moveTo.brightMagenta.bold.italic( 1 , 1 , "Responsive terminal layout! Try resizing your terminal! ;)" ) ;

var document = term.createDocument() ;

var window = new termkit.Window( {
	parent: document ,
	//boxChars: 'dotted' ,
	x: 10 ,
	y: 10 ,
	width: 50 ,
	height: 10 ,
	title: "^c^+Cool^:, a ^/window^:!" ,
	titleHasMarkup: true ,
	
	// Features that are planned, but not yet supported:
	movable: true ,
	minimizable: true ,
	dockable: true ,
	closable: true ,
	scrollable: true ,
	resizable: true
} ) ;

new termkit.Text( {
	parent: window ,
	content: [
		'This is the window content...' ,
		'Second line of content...' ,
		'Third line of content...'
	] ,
	attr: { color: 'green' , italic: true }
} ) ;



term.on( 'key' , function( key ) {
	if ( key === 'CTRL_C' ) {
		term.grabInput( false ) ;
		term.clear() ;
		process.exit() ;
	}
} ) ;

