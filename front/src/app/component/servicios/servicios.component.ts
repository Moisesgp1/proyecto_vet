import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullCalendarModule } from "@fullcalendar/angular";
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridMonth  from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicioSolicitado: any
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridMonth, interactionPlugin],
    dateClick: (info:any) => {
      this.prueba(info.dateStr)
    }
  }

  constructor(private route:ActivatedRoute){

  }

  ngOnInit():void{

    this.route.params.subscribe(param => {
      this.servicioSolicitado = param["nombre"]
    })
  }

  prueba(fecha:any){
    alert("dio click sdsddsus89ttdihihgfidfghfihjgfihufufudfiudidiudidufhghghh en fecha:" + fecha)
  }
}
