'use client';
import { useEffect, useRef } from "react";

export default function Page() {
    const panelsRef = useRef<HTMLDivElement[]>([]); // Reference for panels

    useEffect(() => {
      const panels = document.querySelectorAll('.panel');
      panelsRef.current = Array.from(panels) as HTMLDivElement[]; // Store panel elements
  
      panelsRef.current.forEach(panel => {
        panel.addEventListener('click', () => {
          removeActiveClasses();
          // Use panel directly instead of parentNode
          panel.classList.add('active'); 
        });
      });
  
      return () => {
        panelsRef.current.forEach(panel => {
          panel.removeEventListener('click', removeActiveClasses);
        });
      };
    }, []);
  
    function removeActiveClasses() {
      panelsRef.current.forEach(panel => {
        panel.classList.remove('active'); 
      });
    }
    return (
        <>
            <div className="container">
                <div className="panel active" style={{backgroundImage: "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"}}>
                    <h3>Explore the World!</h3>
                </div>
                <div className="panel" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')"}}>            
                    <h3>Wild forest</h3>
                </div>
                <div className="panel" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')"}}>            
                    <h3>City on Winter</h3>
                </div>
                <div className="panel" style={{backgroundImage: "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"}}>            
                    <h3>Mountains - clouds</h3>
                </div>
            </div>
                {/* <script src="script.js"></script> */}
            </>
        )
    }
