import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';
import { HomeComponent } from './features/home/home.component';
import { PackagesListComponent } from './features/packages/pages/packages-list/packages-list.component';
import { PackageDetailComponent } from './features/packages/pages/package-detail/package-detail.component';
import { HotelsListComponent } from './features/hotels/pages/hotels-list/hotels-list.component';
import { HotelDetailComponent } from './features/hotels/pages/hotel-detail/hotel-detail.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

describe('App, Responsive Components & All Routes', () => {
  it('should create the root App component and toggle mobile navigation drawer', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();

    const rootEl = fixture.nativeElement as HTMLElement;
    const menuBtn = rootEl.querySelector('.mobile-menu-btn') as HTMLButtonElement;
    expect(menuBtn).toBeTruthy();
    expect(rootEl.querySelector('.mobile-nav')).toBeNull();

    menuBtn.click();
    fixture.detectChanges();
    expect(rootEl.querySelector('.mobile-nav')).toBeTruthy();

    menuBtn.click();
    fixture.detectChanges();
    expect(rootEl.querySelector('.mobile-nav')).toBeNull();
  });

  it('should render HomeComponent with 6 tour categories showcase', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    const homeComp = await harness.navigateByUrl('/', HomeComponent);
    expect(homeComp.categoryShowcase().length).toBe(6);
    expect(harness.routeNativeElement?.querySelectorAll('.category-card').length).toBe(6);
  });

  it('should render PackagesListComponent grouped by 6 categories and redirect /paket-tour', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    const listComp = await harness.navigateByUrl('/paket-tour', PackagesListComponent);
    expect(listComp.isGroupedCatalogView()).toBe(true);
    expect(listComp.groupedSections().length).toBe(6);
    expect(listComp.filteredPackages().length).toBe(18);
  });

  it('should render PackageDetailComponent with route options, pricing matrix, and mobile drawer', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    const detailComp = await harness.navigateByUrl(
      '/packages/paket-tour-bali-3h2m',
      PackageDetailComponent
    );
    expect(detailComp.pkg()?.code).toBe('BP-REG-32');
    expect(detailComp.pkg()?.routeOptions?.length).toBe(2);
    expect(detailComp.activeItinerary().length).toBe(3);

    // Switch to Route B
    detailComp.selectedRouteIndex.set(1);
    harness.detectChanges();
    expect(detailComp.activeItinerary()[0].title.id).toContain('Penjemputan');

    // Select a pricing cell
    detailComp.selectPricingCell(2, 1);
    harness.detectChanges();
    expect(detailComp.currentEstimatedPrice()).toBeGreaterThan(0);

    // Toggle mobile sidebar drawer
    expect(detailComp.isMobileDrawerOpen()).toBe(false);
    detailComp.openMobileDrawer();
    harness.detectChanges();
    expect(detailComp.isMobileDrawerOpen()).toBe(true);
    expect(harness.routeNativeElement?.querySelector('.detail-sidebar.drawer-open')).toBeTruthy();

    detailComp.closeMobileDrawer();
    harness.detectChanges();
    expect(detailComp.isMobileDrawerOpen()).toBe(false);
  });

  it('should render HotelsListComponent and filter by area', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    const hotelsComp = await harness.navigateByUrl('/hotels', HotelsListComponent);
    expect(hotelsComp.filteredHotels.length).toBeGreaterThan(0);

    hotelsComp.setArea('Seminyak');
    harness.detectChanges();
    expect(hotelsComp.filteredHotels.every((h) => h.area === 'Seminyak')).toBe(true);
  });

  it('should render HotelDetailComponent and toggle mobile rate drawer', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    const hotelDetailComp = await harness.navigateByUrl(
      '/hotels/the-samaya-beach-resort-seminyak',
      HotelDetailComponent
    );
    expect(hotelDetailComp.hotel()?.area).toBe('Seminyak');
    expect(hotelDetailComp.isMobileDrawerOpen()).toBe(false);

    hotelDetailComp.openMobileDrawer();
    harness.detectChanges();
    expect(hotelDetailComp.isMobileDrawerOpen()).toBe(true);
    expect(harness.routeNativeElement?.querySelector('.detail-sidebar.drawer-open')).toBeTruthy();

    hotelDetailComp.closeMobileDrawer();
    harness.detectChanges();
    expect(hotelDetailComp.isMobileDrawerOpen()).toBe(false);
  });

  it('should render AboutComponent, ContactComponent, and NotFoundComponent cleanly', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();

    const harness = await RouterTestingHarness.create();

    const aboutComp = await harness.navigateByUrl('/about', AboutComponent);
    expect(aboutComp).toBeTruthy();
    expect(harness.routeNativeElement?.querySelector('.about-page')).toBeTruthy();

    const contactComp = await harness.navigateByUrl('/contact', ContactComponent);
    expect(contactComp).toBeTruthy();
    expect(harness.routeNativeElement?.querySelector('.inquiry-form')).toBeTruthy();

    const notFoundComp = await harness.navigateByUrl('/halaman-tidak-ada', NotFoundComponent);
    expect(notFoundComp).toBeTruthy();
    expect(harness.routeNativeElement?.querySelector('.not-found-card')).toBeTruthy();
  });
});
