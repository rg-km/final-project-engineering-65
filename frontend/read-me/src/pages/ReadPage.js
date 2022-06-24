import React, { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import book from "../assets/The-Aliens.pdf";
import '../styles/ReadPage.css'
import Navbar from '../components/NavbarProfil';
import { Button } from 'react-bootstrap';
import RatingModal from "../components/Modals/RatingModal";


export default function ReadPage() {
	const [openModal, setOpenModal] = useState(false)
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
		<div className="btn" onClick={() => setOpenModal(true)} >
			<Button 
			style={
					{color:"white", 
					background: "#3EB489",
					margin: "4%", 
					border: "none"}
				}
			>Next</Button>
		</div>
		{openModal && <RatingModal onClose={setOpenModal}/>}
		</section>
		</>
	);
}
