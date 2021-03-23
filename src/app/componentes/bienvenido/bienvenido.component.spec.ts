import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { bienvenidoComponent } from './bienvenido.component';

describe('bienvenidoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        bienvenidoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(bienvenidoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
