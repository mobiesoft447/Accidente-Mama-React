import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Accidente Mama</title>
        <meta property="og:title" content="Accidente Mama" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <Link to="/" className="home-navlink">
          <img
            alt="logo"
            src="/accidente-mama-espa%C3%A3%C2%A3%C3%A2%C2%B1ol_logo%20white11-1500h.png"
            className="home-image10"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links1">
            <span className="home-text10">
              LLÁMANOS 24/7 PARA UNA CONSULTA GRATUITA
            </span>
          </nav>
          <div className="home-container11">
            <img
              alt="image"
              src="/pastedimage-l7x-200h-200h-200h-1500h.png"
              className="home-image11"
            />
            <div className="home-container12">
              <span className="home-text11">(855) 8-MI-MAMA</span>
              <span className="home-text12">Línea directa de lesiones</span>
            </div>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="/accidente-mama-espa%C3%A3%C2%A3%C3%A2%C2%B1ol_logo%20white11-1500h.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links2">
              <span className="home-text13">
                LLÁMANOS 24/7 PARA UNA CONSULTA GRATUITA
              </span>
              <div className="home-container13">
                <img
                  alt="image"
                  src="/pastedimage-l7x-200h-200h-200h-1500h.png"
                  className="home-image12"
                />
                <div className="home-container14">
                  <span className="home-text14">(855) 5-MY-MAMA</span>
                  <span className="home-text15">Línea directa de lesiones</span>
                </div>
              </div>
            </nav>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-container15">
        <div className="home-container16">
          <span className="home-text16">¿ALGUNA VEZ HA SIDO HERIDO EN UN</span>
          <span className="home-text17">ACCIDENTE DE COCHE?</span>
          <span className="home-text18">
            ¡Llama a mi mamá! Obtenga ayuda legal galardonada.
          </span>
          <div className="home-container17">
            <img
              alt="image"
              src="/pastedimage-l7x-200h-200h-200h-1500h.png"
              className="home-image13"
            />
            <span className="home-text19">(855) 8-MI-MAMA</span>
          </div>
          <span className="home-text20">
            No le cobraremos ni un centavo hasta que se gane su caso.
          </span>
        </div>
        <img alt="image" src="/1%20(1)-1500w.png" className="home-image14" />
      </div>
      <div className="home-container18">
        <span className="home-text21">
          Estar involucrado en un accidente automovilístico puede ser una
          experiencia traumática y abrumadora. Si usted o un ser querido ha
          resultado lesionado en un accidente automovilístico, es importante
          buscar la ayuda de un abogado con experiencia en accidentes
          automovilísticos que pueda proteger sus derechos y garantizar que
          reciba la compensación que merece.
        </span>
      </div>
      <div className="home-container19">
        <div className="home-container20">
          <span className="home-text22">¿Cómo podemos ayudar?</span>
          <div className="home-container21">
            <span className="home-text23">Sin tarifas a menos que ganemos</span>
          </div>
          <div className="home-container22">
            <span className="home-text24">
              Conseguimos clientes hasta 10 veces la oferta de la compañía de
              seguros
            </span>
          </div>
          <div className="home-container23">
            <span className="home-text25">
              Nosotras luchamos por la maxima compensacion
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-container24">
            <span className="home-text26">
              Nos comunicamos con usted en cada paso del camino
            </span>
          </div>
          <div className="home-container25">
            <span className="home-text27">
              Disponible 24 horas al día, 7 días a la semana
            </span>
          </div>
          <div className="home-container26">
            <span className="home-text28">
              Le ayudamos a obtener tratamiento médico y gestionar sus facturas
            </span>
          </div>
          <div className="home-container27">
            <span className="home-text29">
              Ayudamos a manejar los daños a su propiedad
            </span>
          </div>
        </div>
        <div className="home-container28">
          <img alt="image" src="/2%20(1)-1500w.png" className="home-image15" />
        </div>
      </div>
      <div className="home-container29">
        <div className="home-container30">
          <span className="home-text30">
            ¿Por qué elegir a nuestra abogada de accidentes automovilísticos?
          </span>
          <span className="home-text31">
            Nuestro abogado de accidentes automovilísticos tiene años de
            experiencia manejando una amplia gama de casos de accidentes
            automovilísticos, que incluyen:
          </span>
        </div>
        <div className="home-container31">
          <div className="home-container32">
            <div className="home-container33">
              <div className="home-container34">
                <div className="home-container35">
                  <span className="home-text32">Colisiones traseras</span>
                  <img
                    alt="image"
                    src="/pastedimage-t2dj-200h-200h-300h.png"
                    className="home-image16"
                  />
                </div>
                <div className="home-container36">
                  <span className="home-text33">Accidentes de T-bone</span>
                  <img
                    alt="image"
                    src="/pastedimage-w2s7-200h-200h-300h.png"
                    className="home-image17"
                  />
                </div>
              </div>
              <div className="home-container37">
                <div className="home-container38">
                  <span className="home-text34">Accidentes por vuelco</span>
                  <img
                    alt="image"
                    src="/pastedimage-aiz6-200h-200h-300h.png"
                    className="home-image18"
                  />
                </div>
                <div className="home-container39">
                  <span className="home-text35">
                    Accidentes por conducir en estado de ebriedad
                  </span>
                  <img
                    alt="image"
                    src="/pastedimage-1a8i-200h-200h-300h.png"
                    className="home-image19"
                  />
                </div>
              </div>
              <div className="home-container40">
                <div className="home-container41">
                  <span className="home-text36">
                    Accidentes por conducción distraída
                  </span>
                  <img
                    alt="image"
                    src="/pastedimage-7mta-200h-200h-300h.png"
                    className="home-image20"
                  />
                </div>
                <div className="home-container42">
                  <span className="home-text37">
                    Accidentes de peatones y bicicletas
                  </span>
                  <img
                    alt="image"
                    src="/pastedimage-ftcq-200h-200h-300h.png"
                    className="home-image21"
                  />
                </div>
              </div>
            </div>
            <div className="home-container43">
              <img
                alt="image"
                src="/3%20(1)-1500w.png"
                className="home-image22"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-container44">
        <span className="home-text38">
          Tenemos un historial comprobado de éxito en la obtención de acuerdos y
          veredictos favorables para nuestros clientes, y estamos comprometidos
          a brindar representación legal personalizada, compasiva y efectiva.
        </span>
      </div>
      <div className="home-container45">
        <span className="home-text39">Nuestros servicios</span>
        <span className="home-text40">
          Cuando elige a nuestro abogado de accidentes automovilísticos, puede
          esperar los siguientes servicios:
        </span>
        <div className="home-container46">
          <span className="home-text41">
            1. Consulta gratuita: Ofrecemos una consulta gratuita y sin
            compromiso para analizar los detalles de su caso y determinar el
            mejor curso de acción.
          </span>
        </div>
        <div className="home-container47">
          <span className="home-text42">
            2. Investigación y recopilación de pruebas: nuestro equipo
            investigará a fondo el accidente, reunirá todas las pruebas
            relevantes y trabajará con expertos para construir un caso sólido en
            su nombre.
          </span>
        </div>
        <div className="home-container48">
          <span className="home-text43">
            3. Negociación y acuerdo: Negociaremos con las compañías de seguros
            para asegurar un acuerdo justo que cubra sus gastos médicos,
            salarios perdidos y otros daños.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div className="home-container49">
          <span className="home-text44">
            4. Litigio: Si es necesario, estamos preparados para llevar su caso
            a los tribunales y defender agresivamente sus derechos frente a un
            juez y un jurado.
          </span>
        </div>
        <div className="home-container50">
          <span className="home-text45">
            5. Atención personalizada: Tendrá acceso directo a su abogado de
            accidentes automovilísticos durante todo el proceso y lo
            mantendremos informado en cada paso del camino.
          </span>
        </div>
      </div>
      <div className="home-container51">
        <div className="home-container52">
          <span className="home-text46">¿Por qué elegirnos?</span>
          <span className="home-text47">
            Cuando elige a nuestro abogado de accidentes automovilísticos, puede
            esperar los siguientes beneficios:
          </span>
        </div>
        <div className="home-container53">
          <div className="home-container54">
            <span className="home-text48">
              <span>1</span>
              <br></br>
            </span>
            <span className="home-text51">
              Décadas de experiencia en el manejo de casos de accidentes
              automovilísticos.
            </span>
          </div>
          <div className="home-container55">
            <span className="home-text52">
              <span>2</span>
              <br></br>
            </span>
            <span className="home-text55">
              Un historial comprobado de éxito en la obtención de acuerdos y
              veredictos favorables.
            </span>
          </div>
          <div className="home-container56">
            <span className="home-text56">
              <span>3</span>
              <br></br>
            </span>
            <span className="home-text59">
              Atención y comunicación personalizada durante todo el proceso.
            </span>
          </div>
        </div>
        <div className="home-container57">
          <div className="home-container58">
            <span className="home-text60">
              <span>4</span>
              <br></br>
            </span>
            <span className="home-text63">
              Sin costos iniciales: solo nos pagan si ganamos su caso
            </span>
          </div>
          <div className="home-container59">
            <span className="home-text64">5</span>
            <span className="home-text65">
              Un compromiso de brindar representación legal compasiva y efectiva
            </span>
          </div>
        </div>
      </div>
      <div className="home-container60">
        <span className="home-text66">
          Incluso los accidentes aparentemente menores pueden tener
          complicaciones ocultas, especialmente en lo que respecta a las
          lesiones. Es imposible estar seguro del impacto del accidente hasta
          que un profesional médico lo haya evaluado. Los síntomas de las
          lesiones pueden surgir o intensificarse horas, días o incluso semanas
          después del incidente.
        </span>
        <span className="home-text67">
          Consultar con un abogado especializado en accidentes automovilísticos
          es un paso crucial para garantizar que reciba una compensación
          adecuada para una recuperación integral, que cubra los gastos médicos
          actuales y futuros.
        </span>
        <span className="home-text68">
          ¡Contáctanos para una consulta gratuita!
        </span>
      </div>
      <div className="home-container61">
        <div className="home-container62">
          <span className="home-text69">Contacta con nosotras hoy</span>
          <span className="home-text70">
            <span>
              Si usted o un ser querido ha estado involucrado en un accidente
              automovilístico, no dude en contactarnos hoy para una consulta
              gratuita.
            </span>
            <br></br>
            <br></br>
            <span>
              Nuestro abogado de accidentes automovilísticos está aquí para
              ayudarlo a navegar el proceso legal y garantizar que reciba
              Llámenos al
            </span>
            <br></br>
            <br></br>
            <span>la compensación que se merece.</span>
            <span className="home-text78"> (855) 8-MI-MAMA</span>
            <br></br>
            <br></br>
            <span>o complete el formulario a continuación para comenzar.</span>
            <br></br>
          </span>
          <input
            type="text"
            placeholder="Su nombre"
            className="home-textinput1 input"
          />
          <input
            type="text"
            placeholder="Correo electrónico"
            className="home-textinput2 input"
          />
          <textarea
            placeholder="Mensaje"
            className="home-textarea textarea"
          ></textarea>
          <button type="button" className="home-button button">
            Enviar
          </button>
        </div>
        <img
          alt="image"
          src="/contact%20us%20(2)-1500w.png"
          className="home-image23"
        />
      </div>
      <div className="home-container63">
        <div className="home-container64">
          <a
            href="https://www.tickled.app/publisher/signup/accident-mama/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            Programa de referencia
          </a>
          <span className="home-text83">Síganos</span>
          <div className="home-container65">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon20">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon22">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon24">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <span className="home-text84">
          © 2024 Accidente Mamá, Todos los derechos reservados.
        </span>
      </div>
    </div>
  )
}

export default Home
