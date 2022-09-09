from django.shortcuts import render
from .models import Note


def index(request):
    all_notes = Note.objects.all()
    print(all_notes)
    return render(request, 'notes/index.html', {'notes': all_notes})