import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, type, configuration } = body;

    console.log('--- NUEVO CONTACTO RECIBIDO ---');
    console.log('De:', name, '<' + email + '>');
    console.log('Asunto:', type === 'project' ? 'Presupuesto Proyecto' : 'Consulta General');
    console.log('Mensaje:', message || 'Sin mensaje');
    if (configuration) {
      console.log('Configuración:', JSON.stringify(configuration, null, 2));
    }
    console.log('-------------------------------');

    // Aquí integrarías el servicio de mail (Resend, SendGrid, etc.)
    // Ej: const res = await fetch('https://api.resend.com/emails', { ... })

    return NextResponse.json({ success: true, message: 'Mensaje recibido correctamente' });
  } catch (err) {
    console.error('Error in contact API:', err);
    return NextResponse.json({ success: false, error: 'Ocurrió un error al procesar la solicitud' }, { status: 500 });
  }
}
