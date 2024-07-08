
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.sidebar a');

  menuLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // 기본 링크 동작 방지

      const targetSectionId = this.getAttribute('href'); // 클릭된 메뉴 링크의 href 속성 값

alert(targetSectionId);
      // 모든 섹션 숨기기
      const allSections = document.querySelectorAll('section');
      allSections.forEach(function(section) {
        section.style.display = 'none';
      });

      // 해당 섹션 표시
      const targetSection = document.querySelector(targetSectionId);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });
});

  function scrollToSection(section) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = section.offsetTop;

    const scrollDuration = 500; // 스크롤 애니메이션 지속 시간 (밀리초)
    const easingFunction = 'easeInOutQuint'; // 스크롤 애니메이션 효과 (선택 사항)

    const startPosition = scrollTop;
    const endPosition = targetPosition;

    let startTime = null;

    function scrollAnimation() {
      if (!startTime) {
        startTime = performance.now();
      }

      const time = (performance.now() - startTime) / scrollDuration;

      const progress = easingFunction(time);

      const currentPosition = startPosition + (endPosition - startPosition) * progress;

      window.scrollTo(0, currentPosition);

      if (time < 1) {
        requestAnimationFrame(scrollAnimation);
      } else {
        section.focus(); // 스크롤 완료 후 해당 섹션에 포커스 설정 (선택 사항)
      }
    }
