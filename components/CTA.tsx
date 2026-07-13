import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">
        Start learning with our free classes today!
      </div>
      <h2 className="text-3xl font-bold">Join Our Community of Learners</h2>
      <p className="text-lg">Get started with our free classes and join thousands of students who are already learning with us.</p>
      <Image src="images/cta.svg" alt="Call to Action" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>
            Build your own companion
          </p>
        </Link>
      </button>
    </section>
  )
}

export default CTA