import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        page="Nosotros"
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>

            <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros" />

            <div>
              <p>Suspendisse potenti. Nunc et odio nisl. Suspendisse purus mauris, 
                iaculis a hendrerit sit amet, bibendum vel nisi. Sed consectetur at 
                elit pharetra ultrices. Quisque eu ipsum eu nulla facilisis iaculis 
                vitae eu metus. Donec in vulputate ligula, ac rutrum dui. Curabitur 
                semper lorem vitae lacus imperdiet dapibus. Suspendisse mattis facilisis 
                nibh a pulvinar. Phasellus at vestibulum eros. Donec sit amet mi consequat, 
                lacinia odio sit amet, vestibulum libero. Integer convallis placerat cursus.</p>

              <p>Suspendisse potenti. Nunc et odio nisl. Suspendisse purus mauris, 
                iaculis a hendrerit sit amet, bibendum vel nisi. Sed consectetur at 
                elit pharetra ultrices. Quisque eu ipsum eu nulla facilisis iaculis 
                vitae eu metus. Donec in vulputate ligula, ac rutrum dui. Curabitur 
                semper lorem vitae lacus imperdiet dapibus. Suspendisse mattis facilisis 
                nibh a pulvinar. Phasellus at vestibulum eros. Donec sit amet mi consequat, 
                lacinia odio sit amet, vestibulum libero. Integer convallis placerat cursus.</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros