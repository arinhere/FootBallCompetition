import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballCompetitionComponent } from './football-competition.component';
import { HttpClientModule } from '@angular/common/http';

describe('FootballCompetitionComponent', () => {
  let component: FootballCompetitionComponent;
  let fixture: ComponentFixture<FootballCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootballCompetitionComponent],
      imports: [HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootballCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
