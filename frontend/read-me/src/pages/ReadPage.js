import React, { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import book from "../assets/The-Aliens.pdf";
import '../styles/ReadPage.css'
import Navbar from '../components/NavbarProfil';
import { Button } from 'react-bootstrap';


export default function ReadPage() {
	
	return (
		<>
		<Navbar/>
		
		<section className='judul'>
			Judul Buku
		</section>
		
		<div className="read-page">
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
			<Viewer fileUrl={book} allow="autoplay" />
		</Worker>
		</div>

		<section className='under-pdf'>
			<Button 
			style={
					{color:"white", 
					background: "#3EB489",
					margin: "4%", 
					border: "none"}
				}
			>Next</Button>
		</section>
		
		</>
	);
}
