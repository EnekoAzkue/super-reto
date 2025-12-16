import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Cómo la moda sostenible está transformando la industria textil",
    date: "2025-12-01",
    excerpt: "Descubre cómo marcas y diseñadores están reinventando la moda con materiales reciclados y prácticas responsables.",
  },
  {
    id: 2,
    title: "Textiles reciclados: el futuro de la moda consciente",
    date: "2025-11-20",
    excerpt: "Los textiles reciclados permiten reducir el desperdicio y crear prendas con historia y propósito.",
  },
  {
    id: 3,
    title: "Innovación en fibras sostenibles",
    date: "2025-11-10",
    excerpt: "Desde algodón orgánico hasta fibras vegetales innovadoras, conoce los materiales que están cambiando la industria.",
  },
  {
    id: 4,
    title: "Reducción del desperdicio textil en 2025",
    date: "2025-12-05",
    excerpt: "Marcas y consumidores se unen para reducir la cantidad de textiles que terminan en vertederos.",
  },
  {
    id: 5,
    title: "Moda ética: más allá del reciclaje",
    date: "2025-11-28",
    excerpt: "No solo reciclaje: descubre cómo la ética y la transparencia impactan en cada etapa de producción.",
  },
  {
    id: 6,
    title: "El auge de los tejidos naturales",
    date: "2025-11-15",
    excerpt: "Fibras naturales como lino, cáñamo y algodón orgánico se están convirtiendo en los favoritos de diseñadores conscientes.",
  },
    {
    id: 7,
    title: "El impacto ambiental de la moda rápida",
    date: "2025-12-01",
    excerpt: "Cada año, millones de toneladas de ropa terminan en vertederos, liberando químicos y contaminando suelos y agua.",
  },
  {
    id: 8,
    title: "La contaminación textil en cifras",
    date: "2025-11-28",
    excerpt: "Se estima que la industria de la moda produce más emisiones de CO2 que vuelos internacionales y transporte marítimo combinados.",
  },
  {
    id: 9,
    title: "El ciclo de vida de la ropa desechada",
    date: "2025-11-20",
    excerpt: "Muchas prendas terminan en basureros en menos de un año de uso, contribuyendo a la acumulación de residuos sólidos y microplásticos.",
  },
  {
    id: 10,
    title: "Cómo la sobreproducción afecta al planeta",
    date: "2025-11-15",
    excerpt: "La fabricación masiva de ropa exige grandes cantidades de agua, energía y productos químicos, generando un alto costo ambiental.",
  },
  {
    id: 11,
    title: "Desechar ropa: un problema invisible",
    date: "2025-11-10",
    excerpt: "Gran parte de la ropa usada no se recicla ni se dona, lo que provoca que toneladas de textiles sean enterradas cada día.",
  },
  {
    id: 12,
    title: "El verdadero precio de la moda rápida",
    date: "2025-11-05",
    excerpt: "El bajo coste de producción y consumo rápido oculta los efectos devastadores sobre ecosistemas y comunidades vulnerables.",
  },
  {
    id: 13,
    title: "Microplásticos: un efecto silencioso",
    date: "2025-11-01",
    excerpt: "Cuando la ropa sintética se tira o se lava, libera microplásticos que llegan a ríos y océanos, afectando la fauna marina.",
  },
  {
    id: 14,
    title: "Reciclaje textil: una solución urgente",
    date: "2025-10-25",
    excerpt: "Reciclar y reutilizar ropa reduce la necesidad de producir nuevas prendas y ayuda a minimizar el impacto ambiental.",
  },
  {
    id: 15,
    title: "El desperdicio de ropa en cifras globales",
    date: "2025-10-20",
    excerpt: "Se calcula que cada segundo se desecha el equivalente a un camión de ropa en el mundo, reflejando un consumo insostenible.",
  },

];

const Blogs = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
        Textile & Sustainable Fashion News
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        {blogPosts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: '1.5rem',
              borderRadius: '12px',
              backgroundColor: '#f5f5f5',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>{post.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>{post.date}</p>
            <p style={{ lineHeight: 1.6 }}>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
