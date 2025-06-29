import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden"/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max:w-[470px] mt-5`}>
          Compare top credit card offers tailored to your needs 
          all in one place. From rewards and cashback to low interest rates, 
          explore the best deals effortlessly.
        </p>
        <Button styles='mt-10 rounded-[10px]' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>

      </div>
    </section>
  )
export default CardDeal