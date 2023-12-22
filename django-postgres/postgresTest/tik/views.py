# views.py
from django.shortcuts import render, redirect
from .forms import FileUploadForm

def upload_file(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('success')  # Redirect to a success page or another view
    else:
        form = FileUploadForm()

    return render(request, 'upload.html', {'form': form})
