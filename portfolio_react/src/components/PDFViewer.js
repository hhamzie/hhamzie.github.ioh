import React, { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';
import './PDFViewer.css';




GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    let isCancelled = false;
//comment
    console.log(`Loading PDF from URL: ${pdfUrl}`);
    const loadingTask = getDocument(pdfUrl);

    loadingTask.promise
      .then((pdf) => {
        if (!isCancelled) {
          console.log('PDF loaded:', pdf);
          renderPage(pdf, 1); // Render the first page only
        }
      })
      .catch((error) => {
        if (!isCancelled) {
          console.error('Error loading PDF:', error);
          setError('Error loading PDF');
        }
      });

    // Cleanup function to set the isCancelled flag to true
    return () => {
      isCancelled = true;
    };
  }, [pdfUrl]);

  const renderPage = (pdf, pageNumber) => {
    pdf.getPage(pageNumber)
      .then((page) => {
        console.log('Page loaded:', page);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        if (!canvas) {
          console.error('Canvas not found');
          setError('Canvas element not found');
          return;
        }
        console.log('Canvas element found:', canvas); // Log the canvas element
        const context = canvas.getContext('2d');
        if (!context) {
          console.error('Canvas context not found');
          setError('Canvas context not found');
          return;
        }
        console.log('Canvas context found:', context); // Log the canvas context
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext).promise.then(() => {
          console.log('Page rendered');
        }).catch((error) => {
          console.error('Error rendering page:', error);
          setError('Error rendering page');
        });
      })
      .catch((error) => {
        console.error('Error loading page:', error);
        setError('Error loading page');
      });
  };

  if (error) {
    return <div className="pdf-viewer">{error}</div>;
  }

  return (
    <div className="pdf-viewer">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PDFViewer;
