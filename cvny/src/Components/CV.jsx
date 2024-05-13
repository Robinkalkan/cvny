import React from 'react';
import cvData from './cvData.json';

export default function CV() {
  return (
    <div className="bakrund">
      <main className="mitt-cv">
        <h1 className="mitt-cv-rubrik">Arbetserfarenhet</h1>
        { }
        {cvData.arbetserfarenhet.map((erfarenhet, index) => (
          <div key={index}>
            <h2>{erfarenhet.arbetsplats}</h2>
            <p>
              {erfarenhet.period}
              <br />
              <br />
              {erfarenhet.beskrivning}
            </p>
          </div>
        ))}

        <h1 className="mitt-cv-rubrik">Utbildning</h1>
        { }
        {cvData.utbildning.map((utbildning, index) => (
          <div key={index}>
            <h2>{utbildning.skola}</h2>
            <p>
              {utbildning.period}
              <br />
              {utbildning.beskrivning}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}