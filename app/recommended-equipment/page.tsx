import type { Metadata } from "next";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import styles from "./equipment.module.css";

export const metadata: Metadata = {
  title: "Recommended Equipment",
  description: "Auctrail equipment guidance for QR-code label printers, durable label media, iPads, scanners, and field-use accessories.",
  alternates: { canonical: "/recommended-equipment/" },
  openGraph: {
    url: "/recommended-equipment/",
    title: "Recommended Equipment | Auctrail",
    images: [{ url: "/auctrail-logo-mark.png", width: 512, height: 512, alt: "Auctrail" }],
  },
};

export default function RecommendedEquipmentPage() {
  return (
    <main className="new-site">
      <SiteHeader />
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <p className={styles.eyebrow}>Recommended Equipment</p>
            <h1>Practical hardware for working with Auctrail.</h1>
            <p>Auctrail is designed to work with readily available equipment instead of requiring proprietary hardware. These recommendations provide a practical starting point for QR-code labeling, asset intake, photography, scanning, and field work.</p>
            <div className={styles.devNote}><strong>Under development:</strong> this help page is still being completed. Equipment recommendations may be refined as Auctrail testing continues. This page is guidance only and does not sell equipment.</div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.sectionTitle}>
              <h2>QR-code and asset label printers</h2>
              <p>Use a simple desktop printer for routine indoor labels and a thermal-transfer printer when labels need to survive moisture, sunlight, abrasion, or long-term outdoor use.</p>
            </div>
            <div className={styles.grid}>
              <article className={styles.card}>
                <div className={styles.visual}>
                  <img src="https://assets.brother.com/transform/e35f9336-4b1f-45f5-9aae-173365227ebe/10656_QL810W_front-png?io=transform%3Afit%2Cwidth%3A680" alt="Brother QL-810W wireless label printer" />
                </div>
                <div className={styles.body}>
                  <span className={styles.tag}>Indoor labels</span>
                  <h3>Brother QL-810W</h3>
                  <p className={styles.subhead}>Recommended starting point for indoor QR-code and asset labels</p>
                  <p>The QL-810W is a compact wireless desktop printer that works well for offices, warehouses, storage rooms, shelving, bins, and other indoor environments.</p>
                  <ul>
                    <li>Wi-Fi and USB connectivity</li>
                    <li>Direct-thermal printing with no ink or toner</li>
                    <li>QR-code and barcode capable</li>
                    <li>Compact enough for an intake desk or workstation</li>
                    <li>Starter label rolls are included with the printer</li>
                  </ul>
                  <div className={styles.note}>Best for labels that stay indoors and are not continuously exposed to water, direct sunlight, chemicals, or severe abrasion.</div>
                </div>
              </article>

              <article className={styles.card}>
                <div className={styles.visual}>
                  <img src="/td-4420tn.webp" alt="Brother TD-4420TN thermal transfer label printer" />
                </div>
                <div className={styles.body}>
                  <span className={styles.tag}>Outdoor / heavy duty</span>
                  <h3>Brother TD-4420TN</h3>
                  <p className={styles.subhead}>Recommended for durable outdoor and harsh-environment labels</p>
                  <p>The TD-4420TN supports thermal-transfer printing and wider industrial label media, making it a stronger fit for equipment, machinery, trailers, tools, outdoor storage, and long-term property identification.</p>
                  <ul>
                    <li>Thermal-transfer and direct-thermal printing</li>
                    <li>Supports labels up to roughly four inches wide</li>
                    <li>QR-code and 2D barcode capable</li>
                    <li>Ethernet, USB, and serial connectivity</li>
                    <li>Designed for durable roll media and ribbon</li>
                  </ul>
                  <div className={styles.note}><strong>Recommended outdoor combination:</strong> white polyester/PET label stock, permanent acrylic outdoor-rated adhesive, and a full-resin black thermal-transfer ribbon.</div>
                </div>
              </article>
            </div>

            <div className={styles.compare}>
              <div className={styles.compareBox}><strong>Mostly indoor use</strong><p>Choose the Brother QL-810W for a simpler, lower-cost desktop setup and routine indoor asset labeling.</p></div>
              <div className={styles.compareBox}><strong>Outdoor or demanding use</strong><p>Choose the Brother TD-4420TN class with polyester labels and full-resin ribbon for long-term durability.</p></div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.shell} ${styles.ipadGrid}`}>
            <div className={styles.ipadVisual}>
              <img src="https://www.apple.com/v/ipad-11/d/images/overview/hero/hero__crzh9misvcuq_large.jpg" alt="Apple 11-inch iPad models" />
            </div>
            <div className={styles.ipadCopy}>
              <p className={styles.eyebrow}>Auctrail mobile platform</p>
              <h2>iPad is the recommended tablet.</h2>
              <p>Auctrail's native tablet experience is being designed around iPadOS so staff can work with assets where the property actually is: at an intake counter, in a warehouse, in storage, or out in the field.</p>
              <ul>
                <li>Asset and property intake</li>
                <li>Taking and reviewing photos</li>
                <li>Scanning QR codes</li>
                <li>Updating records in the field</li>
                <li>Checking asset and disposition status</li>
              </ul>
              <p>For most organizations, a current-generation standard iPad with a durable protective case should be sufficient. Cellular models make sense when reliable Wi-Fi will not always be available.</p>
            </div>
          </div>
          <div className={styles.shell}>
            <div className={styles.android}>
              <h3>Android is not supported by the Auctrail native mobile app.</h3>
              <p>This is a deliberate platform decision, not a statement about Android device quality. Auctrail is keeping its first native tablet release focused on one operating environment so testing, camera behavior, permissions, layouts, and support remain manageable and consistent.</p>
              <ul>
                <li>iPads provide a smaller, more predictable range of hardware and screen configurations.</li>
                <li>Testing one tablet platform reduces compatibility issues and support overhead.</li>
                <li>A focused release lets Auctrail deliver a more dependable mobile workflow before considering additional platforms.</li>
              </ul>
              <p><strong>Important:</strong> this limitation applies to the native Auctrail mobile/tablet app. Browser-based Auctrail services are a separate matter.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.sectionTitle}>
              <h2>Scanners and label supplies</h2>
              <p>A dedicated scanner is optional for many organizations. The iPad camera can handle lighter QR-code scanning workloads, while high-volume operations may benefit from a dedicated Bluetooth or USB scanner.</p>
            </div>
            <div className={styles.supplies}>
              <article className={styles.supply}><h3>QR and barcode scanners</h3><p>Look for 2D QR-code support, standard 1D barcode support, Bluetooth or USB connectivity, iPad compatibility, a rechargeable battery, and durable construction for warehouse or field use.</p></article>
              <article className={styles.supply}><h3>Indoor label media</h3><p>Standard compatible label rolls are appropriate for offices, indoor warehouses, shelving, bins, file rooms, storage areas, electronics, and general indoor property.</p></article>
              <article className={styles.supply}><h3>Outdoor label media</h3><p>Use polyester/PET label stock with permanent acrylic outdoor-rated adhesive. Polyester is preferred over polypropylene when long-term resistance to UV exposure, water, temperature changes, and handling matters.</p></article>
              <article className={styles.supply}><h3>Thermal-transfer ribbon</h3><p>Use a full-resin black ribbon for the durable outdoor setup. Resin ribbon provides much stronger resistance to abrasion and environmental exposure than ordinary direct-thermal printing.</p></article>
            </div>
          </div>
        </section>

        <div className={`${styles.shell} ${styles.footerNote}`}>
          <strong>Product independence.</strong> Auctrail does not require customers to purchase equipment from a specific manufacturer. Manufacturer and product names belong to their respective owners. Unless specifically stated otherwise, Auctrail is not affiliated with, sponsored by, or endorsed by the manufacturers listed on this page. Recommendations are provided only to help customers choose equipment suitable for common Auctrail workflows.
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
