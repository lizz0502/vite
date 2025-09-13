//ReactConceptsExamples.tsx
import ProjectStructure from '../components/react-concepts/ProjectStructure'
import ComponentsExample from '../components/react-concepts/ComponentsExample'
import PropsExample from '../components/react-concepts/PropsExample'
import PropTypesExample from '../components/react-concepts/PropTypesExample'
import EventsExample from '../components/react-concepts/EventsExample'
import HooksExample from '../components/react-concepts/HooksExample'
import RouterExample from '../components/react-concepts/RouterExample'
//import HooksDeepDive from '../components/react-concepts/HooksDeepDive'

export default function ReactConcepts() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>
      <h1>Conceptos de React</h1>
      <p>Esta página explica los conceptos clave de React usando ejemplos reales.</p>
      <hr />
      <ProjectStructure />
      <ComponentsExample />
      <PropsExample />
      <PropTypesExample />
      <EventsExample />
      <HooksExample />
      <RouterExample />
      {/* <HooksDeepDive /> */}
    </div>
  )
}