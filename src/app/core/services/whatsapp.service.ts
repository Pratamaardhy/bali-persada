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

export interface PackageBookingConfig {
  routeLabel?: string;
  tierLabel?: string;
  paxLabel?: string;
  travelDate?: string;
  estimatedPrice?: number;
  priceUnit?: string;
}

@Injectable({
  providedIn: 'root',
})
export class WhatsAppService {
  readonly phoneNumber = '628737485732';
  readonly displayPhoneNumber = '+62 873-7485-732';

  buildWhatsAppUrl(message: string): string {
    const encodedText = encodeURIComponent(message.trim());
    return `https://wa.me/${this.phoneNumber}?text=${encodedText}`;
  }

  getPackageMessage(pkg: TourPackage, lang: Language = 'id'): string {
    const title = pkg.title[lang] || pkg.title.id;
    const code = pkg.code;
    const dest = pkg.destination;

    if (lang === 'en') {
      return `Hello Bali Persada Tour and Travel, I am interested in "${title}" [${code}] (${dest}). Could you please share availability, current pricing options, and itinerary details? Thank you.`;
    }

    return `Halo Bali Persada Tour and Travel, saya tertarik dengan "${title}" [${code}] (${dest}). Mohon informasi lebih lanjut mengenai ketersediaan jadwal dan penawaran harganya. Terima kasih.`;
  }

  getPackageWhatsAppUrl(pkg: TourPackage, lang: Language = 'id'): string {
    return this.buildWhatsAppUrl(this.getPackageMessage(pkg, lang));
  }

  getConfiguredPackageMessage(
    pkg: TourPackage,
    config: PackageBookingConfig,
    lang: Language = 'id'
  ): string {
    const title = pkg.title[lang] || pkg.title.id;
    const formattedPrice = config.estimatedPrice
      ? `Rp ${new Intl.NumberFormat('id-ID').format(config.estimatedPrice)} ${config.priceUnit || ''}`.trim()
      : '-';

    if (lang === 'en') {
      const linesEn = [
        `Hello Bali Persada Tour and Travel, I would like to inquire/book this tour package:`,
        `- Package: ${title} (${pkg.code})`,
        config.routeLabel ? `- Route Variant: ${config.routeLabel}` : null,
        config.tierLabel ? `- Package / Hotel Option: ${config.tierLabel}` : null,
        config.paxLabel ? `- Participants: ${config.paxLabel}` : null,
        config.travelDate ? `- Planned Travel Date: ${config.travelDate}` : null,
        config.estimatedPrice ? `- Indicative Rate: ${formattedPrice}` : null,
        ``,
        `Could you please confirm availability and share the official quotation? Thank you.`,
      ].filter((item): item is string => item !== null);

      return linesEn.join('\n');
    }

    const linesId = [
      `Halo Bali Persada Tour and Travel, saya ingin berkonsultasi / memesan paket tour berikut:`,
      `- Paket: ${title} (${pkg.code})`,
      config.routeLabel ? `- Opsi Rute: ${config.routeLabel}` : null,
      config.tierLabel ? `- Pilihan Paket / Hotel: ${config.tierLabel}` : null,
      config.paxLabel ? `- Jumlah Peserta: ${config.paxLabel}` : null,
      config.travelDate ? `- Rencana Tanggal: ${config.travelDate}` : null,
      config.estimatedPrice ? `- Estimasi Tarif Katalog: ${formattedPrice}` : null,
      ``,
      `Mohon dibantu informasi ketersediaan dan penawaran resminya. Terima kasih.`,
    ].filter((item): item is string => item !== null);

    return linesId.join('\n');
  }

  getConfiguredPackageWhatsAppUrl(
    pkg: TourPackage,
    config: PackageBookingConfig,
    lang: Language = 'id'
  ): string {
    return this.buildWhatsAppUrl(this.getConfiguredPackageMessage(pkg, config, lang));
  }

  getCustomGroupWhatsAppUrl(lang: Language = 'id'): string {
    const msg =
      lang === 'en'
        ? `Hello Bali Persada Tour and Travel, I would like to request a custom Bali tour itinerary / corporate group gathering quotation. Could you assist us with route and hotel options? Thank you.`
        : `Halo Bali Persada Tour and Travel, saya ingin berkonsultasi mengenai pembuatan Paket Tour Custom / Gathering Rombongan di Bali. Mohon dibantu rekomendasi rute, armada, dan penawaran harganya. Terima kasih.`;
    return this.buildWhatsAppUrl(msg);
  }

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

  getGeneralMessage(lang: Language = 'id'): string {
    if (lang === 'en') {
      return `Hello Bali Persada Tour and Travel, I would like to consult about your Bali tour packages and hotel booking assistance. Thank you.`;
    }
    return `Halo Bali Persada Tour and Travel, saya ingin berkonsultasi mengenai paket tour liburan dan pemesanan hotel di Bali. Terima kasih.`;
  }

  getGeneralWhatsAppUrl(lang: Language = 'id'): string {
    return this.buildWhatsAppUrl(this.getGeneralMessage(lang));
  }

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

  openWhatsAppUrl(url: string): void {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
