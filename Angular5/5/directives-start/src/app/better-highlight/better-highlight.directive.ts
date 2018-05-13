import { Directive, Renderer2, OnInit, ElementRef, HostListener ,RendererV2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit{

  constructor(private elRef: ElementRef,  private renderer: RendererV2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue')
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue',false,false);
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent',false,false)
  }

}
