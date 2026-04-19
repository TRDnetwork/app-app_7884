import React from 'react';

const Hours: React.FC = () => {
  return (
    <section id="hours" className="section bg-[#E8DCC5]">
      <div className="card max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#2F4F2F]">Opening Hours</h2>
        <table className="w-full text-left">
          <tbody>
            <tr className="border-b border-[#C8BFB3]">
              <td className="py-3 font-medium">Monday - Friday</td>
              <td className="py-3 text-right">7am - 7pm</td>
            </tr>
            <tr className="border-b border-[#C8BFB3]">
              <td className="py-3 font-medium">Saturday - Sunday</td>
              <td className="py-3 text-right">8am - 6pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hours;