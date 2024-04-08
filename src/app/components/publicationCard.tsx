"use client"
import React, { useEffect, useState } from 'react';

interface Publicacion {
  _id: number;
  author: string;
  body: string;
  title: string;
  
}

const PublicationCard = () => {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);

  useEffect(() => {
    fetch('/api/publications')
      .then(response => response.json())
      .then((data: Publicacion[]) => setPublicaciones(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold mb-10 mt-10">Publicaciones</h1>
      <div className="w-1/2 mx-auto">
        {publicaciones.map(publicacion => (
          <div key={publicacion._id} className="bg-slate-50 shadow-lg rounded-lg overflow-hidden mb-6">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">{publicacion.title}</h2>
            </div>
            <div className="px-4 py-3">
              <p className="text-gray-700">{publicacion.body}</p>
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <p className="text-gray-600">Escrito por: {publicacion.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
};

export default PublicationCard;
