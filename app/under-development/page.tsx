import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auctrail | Under Development",
  description: "Auctrail is currently under development.",
  robots: { index: false, follow: false },
};

export default function UnderDevelopmentPage() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#0d1b2a",color:"white",padding:"32px",fontFamily:"Arial, sans-serif"}}>
      <section style={{maxWidth:"720px",textAlign:"center"}}>
        <img src="/auctrail-logo-approved.jpg" alt="Auctrail" width="425" height="115" style={{maxWidth:"100%",height:"auto",marginBottom:"32px"}} />
        <p style={{textTransform:"uppercase",letterSpacing:"0.16em",fontSize:"13px",fontWeight:700,opacity:.78}}>Surplus asset disposition software</p>
        <h1 style={{fontSize:"clamp(40px,7vw,72px)",lineHeight:1.05,margin:"16px 0"}}>Under Development</h1>
        <p style={{fontSize:"20px",lineHeight:1.6,opacity:.86,margin:"0 auto",maxWidth:"620px"}}>
          Auctrail is currently being developed and prepared for launch. Please check back for updates.
        </p>
      </section>
    </main>
  );
}
