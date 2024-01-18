
import { Component } from "@angular/core";

@Component({
    selector: 'dinesh',
    templateUrl: './dinesh.html',
    styleUrls: ['./dinesh.css']
})
export class Dinesh {

    isPopupOpen: boolean = false;
    selectAll: boolean = false;

    constructor() { }
    
    array = [
        {
            id: 1,
            desc: 'Executive Summary',
            selectState: false
        },

        {
            id: 2,
            desc: 'Executive Summary',
            selectState: false
        },

        {
            id: 3,
            desc: 'Executive Summary',
            selectState: false
        },

        {
            id: 4,
            desc: 'Executive Summary',
            selectState: false
        },

        {
            id: 5,
            desc: 'Executive Summary',
            selectState: false
        },

        {
            id: 6,
            desc: 'Executive Summary',
            selectState: false
        },

        {
            id: 7,
            desc: 'Executive Summary',
            selectState: false
        },

        {
            id: 8,
            desc: 'Executive Summary',
            selectState: false
        },

        {
            id: 9,
            desc: 'Executive Summary',
            selectState: false
        },

        {
            id: 10,
            desc: 'Executive Summary',
            selectState: false
        }

    ]

    openPopup() {
        this.isPopupOpen = true;
    }

    closePopup() {
        this.isPopupOpen = false;
    }

    handleClick(index: number) {
        this.array[index].selectState = !this.array[index].selectState;
        this.updateSelectAllState();
    }

    handleSelectAll() {
        this.array.forEach(item => item.selectState = this.selectAll);
    }

    updateSelectAllState() {
        this.selectAll = this.array.every(item => item.selectState);
    }
}
