import {TextLinkComponent} from './text-link.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('TextLinkComponent', () => {
    let component: TextLinkComponent;
    let fixture: ComponentFixture<TextLinkComponent>;
    let a: HTMLAnchorElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({imports: [TextLinkComponent]}).compileComponents();

        fixture = TestBed.createComponent(TextLinkComponent);
        component = fixture.componentInstance;

        a = fixture.nativeElement.querySelector('a');

        fixture.componentRef.setInput('href', 'https://example.com');
        fixture.componentRef.setInput('label', 'Example');

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the href from the input href', () => {
        expect(a.getAttribute('href')).toBe('https://example.com');
    });

    it('should render the aria-label from the input label', () => {
        expect(a.getAttribute('aria-label')).toBe('Example');
    });

    it('should show the text from the input label', () => {
        expect(a.textContent?.trim()).toBe('Example');
    });

    it('should contain the color-white class', () => {
        expect(a.classList).toContain('color-white');
    });
});
