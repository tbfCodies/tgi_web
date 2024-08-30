// pages/api/staff/index.js

export default async function handler(req, res) {
    // Här kan du ladda data från din datakälla (databas, extern API etc.)
    const response = await fetch('https://example.com/api/staff'); // Ändra URL till din riktiga API
    const data = await response.json();
  
    // Filter för att säkerställa att vi bara får de roller vi vill visa
    const filteredData = data.filter(member => 
      ['Manager', 'Administrator', 'Supervisor', 'Staff'].includes(member.position)
    );
  
    res.status(200).json(filteredData);
  }
  