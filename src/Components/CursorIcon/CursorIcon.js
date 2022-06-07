import './CursorIcon.css'
import { gsap, Power2 } from 'gsap'

export default class CursorIcon {

    visibile = false

    elements = {
        cursor: document.getElementById('cursor-icon')
    }

    constructor() {
        //global access
        window.cursorIcon = this

        this.setupEventListeners()
    }

    setupEventListeners() {
        window.addEventListener('mousemove', (event) => {
            //move using gsap
            gsap.to(this.elements.cursor, {
                x: event.clientX,
                y: event.clientY,
                duration: 1,
                ease: Power2.easeOut
            })
        })
    }

    show(text) {
        this.elements.cursor.innerHTML = text

        if (!this.visibile) {
            this.visibile = true

            this.elements.cursor.style.display = 'flex'

            gsap.killTweensOf(this.elements.cursor)

            //Scale up
            gsap.to(this.elements.cursor, { scale: 1, duration: .3 })
        }
    }

    hide() {
        if (this.visibile) {
            this.visibile = false

            gsap.killTweensOf(this.elements.cursor)

            //Scale down
            gsap.to(this.elements.cursor, {
                scale: 0, duration: .3, onComplete: () => {
                    //hide on complete
                    this.elements.cursor.style.display = 'none'
                }
            })
        }
    }
}