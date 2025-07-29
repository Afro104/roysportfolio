'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faFile } from "@fortawesome/free-regular-svg-icons/faFile";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { Box, Modal, Typography } from "@mui/material";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

interface Document {
  uri: string;
}

export default function Home() {
  
  const style = {
    position: 'absolute',
    top: '29rem',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35rem',
    height: '56rem',
    bgcolor: 'transparent',
    zIndex : 0,
    '@media (max-width: 768px)': {
      width: '95vw',
      height: '90vh',
      top: '50%',
      maxWidth: '500px',
      maxHeight: '700px'
    },
    '@media (max-width: 480px)': {
      width: '98vw',
      height: '95vh',
      maxWidth: '450px',
      maxHeight: '800px'
    }
  };
  const styleProjects = {
    position: 'absolute',
    top: '29rem',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35rem',
    height: '35rem',
    background: 'linear-gradient(135deg, #e8f4f8 0%, #d1e7dd 25%, #b8d4d9 50%, #a8c5d1 75%, #9bb8c8 100%)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    zIndex : 0,
    '@media (max-width: 768px)': {
      width: '95vw',
      height: '35rem',
      top: '50%',
      maxWidth: '500px',
      maxHeight: '700px'
    },
    '@media (max-width: 480px)': {
      width: '98vw',
      height: '35rem',
      maxWidth: '450px',
      maxHeight: '800px'
    }
  };


  const [open, setOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const handleOpen = () =>{ 
    setOpen(true)
  };
  const handleOpenProjects = () =>{ 
    setOpenProjects(true)
  };
  const handleClose = () => setOpen(false);
  const handleCloseProjects = () => setOpenProjects(false);

  const [docs, setDocs] = useState<Document[]>([]);
  const resumePDF = '../resume2024.pdf';

  useEffect(() => {
    const tempDocs: Document[] = [{ uri: resumePDF }];
    setDocs(tempDocs);
  }, []);

  return (
    <>
      <Head>
        <title>Rogelio Rodriguez Portfolio</title>
      </Head>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/solar-system.js" strategy="afterInteractive" />
      {/* Add required initial classes for JS to work */}
      <div id="body-classes" className="view-3D set-speed scale-stretched">
        <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        
      <div className="box z-40" style={{width: "100%"}}>
        <div className="inner">
          <span>Rogelio Rodriguez's</span>
        </div>
        <div className="inner">
          <span>Portfolio</span>
        </div>
      </div>
<div className="z-50" style={{position: 'absolute', width: '100%', height:'100%'}}>
        <ul>
          <li>
            <a className="linkedIn" href="https://www.linkedin.com/in/rogelio-rodriguez-676552182/" target="_blank" rel="noopener noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a className="resume" onClick={handleOpen}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon icon={faFile} />
            </a>
          </li>
          <li>
            <a className="github" href="https://github.com/Afro104" target="_blank" rel="noopener noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a className="desktop" onClick={handleOpenProjects}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon icon={faDesktop} />
            </a>
          </li>
        </ul>
      </div>

      <div className="stars z-0">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <Modal 
        className='overflow-x-scroll overflow-x-hidden scrollbar'
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          onClick: (event) => event.stopPropagation(), // Prevent modal from closing on backdrop click
        }}
      >
        <Box sx={style}>
          <div className="wrapper">
            {[...Array(15)].map((_, index) => (
              <div key={index}>
                <span className="dot"></span>
              </div>
            ))}
          </div>
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              backgroundColor: 'transparent',
              padding: 2,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="table center">
                <div className="monitor-wrapper center">
                    <div className="monitor center">
                        <p>Rogelio Rodriguez's Resume,"Creativity is seeing what others see and thinking what no one else ever thought."-Albert Einstein.</p>
                    </div>
                </div>
            </div>
            </Typography>
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[1]}
              pluginRenderers={DocViewerRenderers}
              theme={{
                primary: "#5296d8",
                secondary: "#ffffff",
                tertiary: "#5296d899",
                textPrimary: "#ffffff",
                textSecondary: "#5296d8",
                textTertiary: "#00000099",
                disableThemeScrollbar: false,
              }}
              config={{
                header: {
                  disableHeader: true,
                  disableFileName: true,
                },
                pdfZoom : {
                  defaultZoom : 1.24,
                  zoomJump : .2
                }
              }}
            />
          </Box>
          <div className='FooterButtons'>
            <button className='BtnClose' onClick={handleClose}></button>
          </div>
        </Box>
      </Modal>
      <Modal 
        className='overflow-x-scroll overflow-x-hidden scrollbar'
        open={openProjects}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          onClick: (event) => event.stopPropagation(), // Prevent modal from closing on backdrop click
        }}
      >
        <Box sx={styleProjects}>
       
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              backgroundColor: 'transparent',
              padding: 2,
              overflow: 'hidden',
              minHeight: '400px'
            }}
          >
            {/* Rain effect background */}
            <div className="rain no-lightning" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0
            }}>
              {Array.from({ length: 500 }, (_, i) => {
                const opacity = Math.random() * 0.9;
                const left = Math.random() * 120;
                const borderWidth = Math.random() * 8 + 1;
                const duration = Math.random() * 2 + 1;
                const delay = Math.random() * -5;
                const animationNumber = (i % 15) + 1; // Use numbers 1-15 for the 15 different animations
                
                return (
                  <div 
                    key={i} 
                    className="drop"
                    style={{
                      opacity: opacity,
                      left: `${left}vw`,
                      borderLeftWidth: `${borderWidth}vmin`,
                      animation: `rain-fall-${animationNumber} ${duration}s ${delay}s ease-in infinite`
                    }}
                  ></div>
                );
              })}
            </div>
            
            {/* Logo content */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
              position: 'relative',
              zIndex: 3,
              flexDirection: 'row',
              gap: '2rem'
            }}>
              {/* Nails by Liz Project */}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ 
                  color: '#333', 
                  marginBottom: '1rem', 
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Nails by Liz
                </h3>
                <a 
                  href="https://nailsbyliz.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  <Image
                    src="/nailsbyliz.png"
                    alt="Nails by Liz Logo"
                    width={120}
                    height={120}
                    style={{
                      borderRadius: '12px',
                      objectFit: 'cover',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      transition: 'transform 0.2s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </a>
              </div>

              {/* Thumbnail Generator Project */}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ 
                  color: '#333', 
                  marginBottom: '1rem', 
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Thumbnail Generator
                </h3>
                <a 
                  href="https://thumbnailgenerator-phi.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  <Image
                    src="/ytgen.PNG"
                    alt="Thumbnail Generator"
                    width={120}
                    height={120}
                    style={{
                      borderRadius: '12px',
                      objectFit: 'cover',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      transition: 'transform 0.2s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </a>
              </div>
            </div>
          </Box>
          <div className='FooterButtons'>
            <button className='BtnClose' onClick={handleCloseProjects}></button>
          </div>
        </Box>
      </Modal>
      <>
  <div id="navbar">
  
  </div>
  
  <div id="universe" className="scale-stretched">
    <div id="galaxy">
      <div id="solar-system" className="earth">
        <div id="mercury" className="orbit">
          <div className="pos">
            <div className="planet">
             
            </div>
          </div>
        </div>
        <div id="venus" className="orbit">
          <div className="pos">
            <div className="planet">
              
            </div>
          </div>
        </div>
        <div id="earth" className="orbit">
          <div className="pos">
            <div className="orbit">
              <div className="pos">
                <div className="moon" />
              </div>
            </div>
            <div className="planet">
  
            </div>
          </div>
        </div>
        <div id="mars" className="orbit">
          <div className="pos">
            <div className="planet">
              
            </div>
          </div>
        </div>
        <div id="jupiter" className="orbit">
          <div className="pos">
            <div className="planet">
              
            </div>
          </div>
        </div>
        <div id="saturn" className="orbit">
          <div className="pos">
            <div className="planet">
              <div className="ring" />
              
            </div>
          </div>
        </div>
        <div id="uranus" className="orbit">
          <div className="pos">
            <div className="planet">
             
            </div>
          </div>
        </div>
        <div id="neptune" className="orbit">
          <div className="pos">
            <div className="planet">
             
            </div>
          </div>
        </div>
        <div id="sun">
         
        </div>
      </div>
    </div>
  </div>
</>

    </main>
      </div>
    </>
  );
}
