'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faFile } from "@fortawesome/free-regular-svg-icons/faFile";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
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
    zIndex : 0
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () =>{ 
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const [docs, setDocs] = useState<Document[]>([]);
  const resumePDF = '../resume2024.pdf';

  useEffect(() => {
    const tempDocs: Document[] = [{ uri: resumePDF }];
    setDocs(tempDocs);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="box z-40">
        <div className="inner">
          <span>Rogelio Rodriguez's</span>
        </div>
        <div className="inner">
          <span>Portfolio</span>
        </div>
      </div>
      <div className="z-50">
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
              {/* <div className="shadow">Resume</div> */}
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
    </main>
  );
}
