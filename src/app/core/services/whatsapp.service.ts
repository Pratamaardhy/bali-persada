import { Injectable } from '@angular/core';
import { TourPackage } from '../models/package.model';
import { Hotel } from '../models/hotel.model';
import { Language } from '../models/translation.model';

export interface InquiryFormData {
  name: string;
  service: string;
  dates: string;
  guests: string;
  notes: string;
}

@Injectable({
  providedIn: 'root',
})
export class WhatsAppService {
  // Official business number specified by requirements (no +, spaces, or dashes)
  readonly phoneNumber = '628737485732';
  readonly displayPhoneNumber = '+62 873-7485-732';

  /**
   * Generates WhatsApp direct chat URL with URI-encoded text
   */
  buildWhatsAppUrl(message: string): string {
    const encodedText = encodeURIComponent(message.trim());
    return `https://wa.me/${this.phoneNumber}?text=${encodedText}`;
  }

  /**
   * Package-specific consultation message
   */
  getPackageMessage(pkg: TourPackage, lang: Language = 'id'): string {
    const title = pkg.title[lang] || pkg.title.id;
    const dest = pkg.destination;

    if (lang === 'en') {
      return `Hello Bali Persada Tour and Travel, I am interested in the "${title}" package (${dest}). Could you please share more information regarding current pricing, available dates, and custom itinerary options? Thank you.`;
    }

    return `Halo Bali Persada Tour and Travel, saya tertarik dengan paket "${title}" (${dest}). Mohon informasi lebih lanjut mengenai harga, jadwal, dan ketersediaannya. Terima kasih.`;
  }

  getPackageWhatsAppUrl(pkg: TourPackage, lang: Language = 'id'): string {
    return this.buildWhatsAppUrl(this.getPackageMessage(pkg, lang));
  }

  /**
   * Hotel-specific consultation message
   */
  getHotelMessage(hotel: Hotel, lang: Language = 'id'): string {
    const name = hotel.name;
    const location = hotel.location;

    if (lang === 'en') {
      return `Hello Bali Persada Tour and Travel, I would like to inquire about "${name}" (${location}), including room rates, availability for upcoming dates, and booking details. Thank you.`;
    }

    return `Halo Bali Persada Tour and Travel, saya ingin menanyakan informasi hotel "${name}" (${location}), termasuk harga, ketersediaan kamar, dan ketentuan pemesanan. Terima kasih.`;
  }

  getHotelWhatsAppUrl(hotel: Hotel, lang: Language = 'id'): string {
    return this.buildWhatsAppUrl(this.getHotelMessage(hotel, lang));
  }

  /**
   * General inquiry message
   */
  getGeneralMessage(lang: Language = 'id'): string {
    if (lang === 'en') {
      return `Hello Bali Persada Tour and Travel, I would like to consult about your Bali holiday packages and hotel booking assistance. Thank you.`;
    }
    return `Halo Bali Persada Tour and Travel, saya ingin berkonsultasi mengenai paket liburan dan pemesanan hotel di Bali. Terima kasih.`;
  }

  getGeneralWhatsAppUrl(lang: Language = 'id'): string {
    return this.buildWhatsAppUrl(this.getGeneralMessage(lang));
  }

  /**
   * Inquiry form message formatter
   */
  getInquiryFormMessage(data: InquiryFormData, lang: Language = 'id'): string {
    if (lang === 'en') {
      return `Hello Bali Persada Tour and Travel, I would like to submit a travel inquiry:
- Name: ${data.name || '-'}
- Interested Service: ${data.service || '-'}
- Planned Dates: ${data.dates || '-'}
- Number of Guests: ${data.guests || '-'}
- Additional Notes: ${data.notes || '-'}

Please assist with quotation and availability. Thank you.`;
    }

    return `Halo Bali Persada Tour and Travel, saya ingin berkonsultasi mengenai rencana perjalanan:
- Nama: ${data.name || '-'}
- Layanan yang Diminati: ${data.service || '-'}
- Rencana Tanggal: ${data.dates || '-'}
- Jumlah Peserta: ${data.guests || '-'}
- Catatan / Kebutuhan Khusus: ${data.notes || '-'}

Mohon informasi penawaran dan ketersediaannya. Terima kasih.`;
  }

  getInquiryFormWhatsAppUrl(data: InquiryFormData, lang: Language = 'id'): string {
    return this.buildWhatsAppUrl(this.getInquiryFormMessage(data, lang));
  }

  /**
   * Safely opens WhatsApp URL in external window
   */
  openWhatsAppUrl(url: string): void {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
