import './Section.css'

interface Props {
  /** Clases de CSS que se agregan al componente padre */
  cssClasses?: string
  /** El contenido de la sección */
  children: React.ReactNode
}

function Section({ ...props }: Props) {
  const cssClasses = props.cssClasses || 'section'

  return <div className={cssClasses}>{props.children}</div>
}

export default Section
