//EventsExample.tsx
/*import { useState } from 'react'

export default function EventsExample() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <h2>3.5 Eventos</h2>
      <p>Los eventos permiten responder a acciones del usuario:</p>
      <pre>{`
<button onClick={() => setContador(contador + 1)}>
  Incrementar
</button>
<p>Contador: {contador}</p>
      `}</pre>
      <p>Ejemplo en vivo:</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>Contador: {contador}</p>
    </>
  )
}*/

import { useState } from 'react';
import ConceptSection from '../ConceptSection';

export default function EventsExamplePage() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Ejemplo de Eventos</h1>

      <ConceptSection
        title="3.5 Eventos"
        description="Los eventos permiten responder a acciones del usuario como clics, cambios de input, etc."
      />

      <ConceptSection
        title="Ejemplo de incremento"
        description="Al hacer clic en el botón se actualiza el estado con useState:"
      >
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <p>Contador: {contador}</p>
      </ConceptSection>
    </div>
  );
}
