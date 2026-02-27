export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Header
    header: {
      title: 'Email Signature Generator',
      subtitle: 'Create a professional email signature in under 5 minutes',
    },
    // Form
    form: {
      title: 'Create Your Signature',
      subtitle: 'Fill in your details below. All fields marked with * are required.',
      fullName: 'Full Name',
      jobTitle: 'Job Title',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      website: 'Website',
      logoUrl: 'Logo URL',
      websiteOptional: 'Optional',
      logoUrlHelper: 'Optional. Enter a direct URL to your logo image (no uploads). Logo will display at 150px × 150px.',
      // Placeholders
      placeholders: {
        fullName: 'Jane Doe',
        jobTitle: 'Marketing Manager',
        company: 'Acme Corp',
        email: 'jane.doe@acme.com',
        phone: '+1 (555) 123-4567',
        website: 'www.acme.com',
        logoUrl: 'https://example.com/logo.png',
      },
      // Validation
      validation: {
        fullNameRequired: 'Full name is required',
        jobTitleRequired: 'Job title is required',
        companyRequired: 'Company is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email address',
        phoneRequired: 'Phone is required',
        logoUrlInvalid: 'Please enter a valid URL (starting with http:// or https://)',
      },
      // Actions
      generateButton: 'Generate Signature',
      generateHelper: 'Complete all required fields to generate',
    },
    // Preview
    preview: {
      title: 'Live Preview',
    },
    // Export
    export: {
      title: 'Your Signature is Ready!',
      subtitle: 'Copy the HTML and paste it into your email client',
      copyHtml: 'Copy HTML',
      copied: 'Copied!',
      downloadHtml: 'Download HTML',
      viewInstructions: 'View Instructions',
      clearSignature: 'Clear Signature',
    },
    // Toast messages
    toast: {
      signatureGenerated: 'Signature generated successfully!',
      signatureCopied: 'Signature copied to clipboard!',
      signatureDownloaded: 'Signature downloaded!',
      signatureCleared: 'Signature cleared',
      copyError: 'Failed to copy. Please try the download option.',
    },
    // Clear confirmation dialog
    clearDialog: {
      title: 'Delete Signature?',
      description: 'This will permanently remove all entered information.',
      cannotUndo: 'This action cannot be undone.',
      cancel: 'Cancel',
      confirm: 'Clear Signature',
    },
    // Instructions Modal
    instructions: {
      title: 'How to Install Your Signature',
      close: 'Close',
      gmail: {
        title: 'Gmail',
        step1: 'Click the gear icon in Gmail and select "See all settings"',
        step2: 'Scroll to the "Signature" section',
        step3: 'Click "Create new" to add a signature',
        step4: 'Paste your copied signature into the text box',
        step5: 'Scroll down and click "Save Changes"',
      },
      outlook: {
        title: 'Outlook (Desktop)',
        step1: 'Open Outlook and click File > Options',
        step2: 'Click "Mail" and then "Signatures"',
        step3: 'Click "New" to create a new signature',
        step4: 'Paste your copied signature into the editor',
        step5: 'Click "OK" to save',
      },
      outlookWeb: {
        title: 'Outlook (Web)',
        step1: 'Click the gear icon and select "View all Outlook settings"',
        step2: 'Go to Mail > Compose and reply',
        step3: 'Under "Email signature", paste your signature',
        step4: 'Click "Save" at the bottom',
      },
      appleMailMac: {
        title: 'Apple Mail (Mac)',
        step1: 'Open Mail and go to Mail > Preferences',
        step2: 'Click the "Signatures" tab',
        step3: 'Click the "+" button to create a new signature',
        step4: 'Paste your copied signature',
        step5: 'Close the preferences window to save',
      },
      appleMailIos: {
        title: 'Apple Mail (iOS)',
        step1: 'Go to Settings > Mail',
        step2: 'Tap "Signature"',
        step3: 'Paste your copied signature',
        step4: 'The signature will be saved automatically',
      },
    },
  },
  es: {
    // Header
    header: {
      title: 'Generador de Firmas de Correo',
      subtitle: 'Crea una firma de correo profesional en menos de 5 minutos',
    },
    // Form
    form: {
      title: 'Crea tu Firma',
      subtitle: 'Completa tus datos a continuación. Todos los campos marcados con * son obligatorios.',
      fullName: 'Nombre Completo',
      jobTitle: 'Cargo',
      company: 'Empresa',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      website: 'Sitio Web',
      logoUrl: 'URL del Logo',
      websiteOptional: 'Opcional',
      logoUrlHelper: 'Opcional. Ingresa una URL directa a la imagen de tu logo (sin subir archivos). El logo se mostrará en 150px × 150px.',
      // Placeholders
      placeholders: {
        fullName: 'María García',
        jobTitle: 'Directora de Marketing',
        company: 'Empresa Ejemplo',
        email: 'maria.garcia@ejemplo.com',
        phone: '+52 (55) 1234-5678',
        website: 'www.ejemplo.com',
        logoUrl: 'https://ejemplo.com/logo.png',
      },
      // Validation
      validation: {
        fullNameRequired: 'El nombre completo es obligatorio',
        jobTitleRequired: 'El cargo es obligatorio',
        companyRequired: 'La empresa es obligatoria',
        emailRequired: 'El correo electrónico es obligatorio',
        emailInvalid: 'Dirección de correo electrónico inválida',
        phoneRequired: 'El teléfono es obligatorio',
        logoUrlInvalid: 'Por favor ingresa una URL válida (que comience con http:// o https://)',
      },
      // Actions
      generateButton: 'Generar Firma',
      generateHelper: 'Completa todos los campos obligatorios para generar',
    },
    // Preview
    preview: {
      title: 'Vista Previa en Vivo',
    },
    // Export
    export: {
      title: '¡Tu Firma está Lista!',
      subtitle: 'Copia el HTML y pégalo en tu cliente de correo',
      copyHtml: 'Copiar HTML',
      copied: '¡Copiado!',
      downloadHtml: 'Descargar HTML',
      viewInstructions: 'Ver Instrucciones',
      clearSignature: 'Borrar Firma',
    },
    // Toast messages
    toast: {
      signatureGenerated: '¡Firma generada exitosamente!',
      signatureCopied: '¡Firma copiada al portapapeles!',
      signatureDownloaded: '¡Firma descargada!',
      signatureCleared: 'Firma borrada',
      copyError: 'Error al copiar. Por favor intenta la opción de descarga.',
    },
    // Clear confirmation dialog
    clearDialog: {
      title: '¿Eliminar Firma?',
      description: 'Esto eliminará permanentemente toda la información ingresada.',
      cannotUndo: 'Esta acción no se puede deshacer.',
      cancel: 'Cancelar',
      confirm: 'Borrar Firma',
    },
    // Instructions Modal
    instructions: {
      title: 'Cómo Instalar tu Firma',
      close: 'Cerrar',
      gmail: {
        title: 'Gmail',
        step1: 'Haz clic en el ícono de engranaje en Gmail y selecciona "Ver todas las configuraciones"',
        step2: 'Desplázate hasta la sección "Firma"',
        step3: 'Haz clic en "Crear nueva" para agregar una firma',
        step4: 'Pega tu firma copiada en el cuadro de texto',
        step5: 'Desplázate hacia abajo y haz clic en "Guardar cambios"',
      },
      outlook: {
        title: 'Outlook (Escritorio)',
        step1: 'Abre Outlook y haz clic en Archivo > Opciones',
        step2: 'Haz clic en "Correo" y luego en "Firmas"',
        step3: 'Haz clic en "Nueva" para crear una nueva firma',
        step4: 'Pega tu firma copiada en el editor',
        step5: 'Haz clic en "Aceptar" para guardar',
      },
      outlookWeb: {
        title: 'Outlook (Web)',
        step1: 'Haz clic en el ícono de engranaje y selecciona "Ver toda la configuración de Outlook"',
        step2: 'Ve a Correo > Redactar y responder',
        step3: 'En "Firma de correo electrónico", pega tu firma',
        step4: 'Haz clic en "Guardar" en la parte inferior',
      },
      appleMailMac: {
        title: 'Apple Mail (Mac)',
        step1: 'Abre Mail y ve a Mail > Preferencias',
        step2: 'Haz clic en la pestaña "Firmas"',
        step3: 'Haz clic en el botón "+" para crear una nueva firma',
        step4: 'Pega tu firma copiada',
        step5: 'Cierra la ventana de preferencias para guardar',
      },
      appleMailIos: {
        title: 'Apple Mail (iOS)',
        step1: 'Ve a Ajustes > Mail',
        step2: 'Toca "Firma"',
        step3: 'Pega tu firma copiada',
        step4: 'La firma se guardará automáticamente',
      },
    },
  },
};
